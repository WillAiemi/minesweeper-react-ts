import React, { MouseEvent, useState } from "react"

import smile from "../../assets/smile.png"
import ohh from "../../assets/ohh.png"
import win from "../../assets/win.png"
import dead from "../../assets/dead.png"
import { start } from "../../store/game/gameSlice"
import { RootState, useAppDispatch, useAppSelector } from "../../store"
import Counter from "../Counter"
import useTimer from "../../hooks/useTimer"

import { RestartButton, ScoreBarContainer } from "./styles"
interface Props {
    isMouseDown: boolean;
}

const getImageProps = (
    isGameRunning: boolean,
    isGameOver: boolean,
    isGameWon: boolean,
    isMouseDown: boolean,
) => {
    if (isGameRunning && isMouseDown) {
        return {
            src: ohh,
            alt: "ohh"
        }
    }

    if (isGameOver) {
        return {
            src: dead,
            alt: "dead"
        }
    }

    if (isGameWon) {
        return {
            src: win,
            alt: "win"
        }
    }

    return {
        src: smile,
        alt: "smile"
    }
}

const ScoreBar: React.FC<Props> = ({ isMouseDown }) => {
    const dispatch = useAppDispatch()
    const {
        isGameRunning,
        isGameOver,
        isGameWon,
        numberOfBombs,
        flaggedTiles,
    } = useAppSelector((state: RootState) => state.game)
    const [isMouseDownOnRestartButton, setIsMouseDownOnRestartButton] = useState(false)
    const time = useTimer()

    const resetGame = () => {
        dispatch(start())
    }

    const onMouseDownOnRestartButton = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()

        setIsMouseDownOnRestartButton(true)
    }

    const onMouseLeaveOrGoUp = () => {
        setIsMouseDownOnRestartButton(false)
    }

    const imageProps = getImageProps(isGameRunning, isGameOver, isGameWon, isMouseDown)

    return (
        <ScoreBarContainer>
            <Counter number={numberOfBombs - flaggedTiles} />
            <RestartButton
                isMouseDown={isMouseDownOnRestartButton}
                onMouseDown={onMouseDownOnRestartButton}
                onMouseLeave={onMouseLeaveOrGoUp}
                onMouseUp={onMouseLeaveOrGoUp}
            >
                <button type="button" onClick={resetGame}>
                    <img {...imageProps} />
                </button>
            </RestartButton>
            <Counter number={time} />
        </ScoreBarContainer>
    )
}

export default ScoreBar