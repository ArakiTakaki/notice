import { css } from '@emotion/core';
import { COLORS } from "../constants/colors"

export const createNeumorphismInnner = (depth: number) => css({
  boxShadow: `inset ${depth}px ${depth}px ${depth * 2}px #${COLORS.SHADOW.toString(16)}, inset -${depth}px -${depth}px ${depth * 2}px #${COLORS.LIGHT.toString(16)}`,
});

export const createNeumorphismOuter = (depth: number) => css({
  boxShadow: `${depth}px ${depth}px ${depth * 2}px #${COLORS.SHADOW.toString(16)}, -${depth}px -${depth}px ${depth * 2}px #${COLORS.LIGHT.toString(16)}`,
});