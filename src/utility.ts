import {
  FIGMA_HEIGHT,
  FIGMA_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from './constants/displayInfo';

export function getDisplayWidth(width: number) {
  const newWidth = (WINDOW_WIDTH / FIGMA_WIDTH) * width;
  return newWidth;
}

export function getDisplayHeight(height: number) {
  const newHeight = (WINDOW_HEIGHT / FIGMA_HEIGHT) * height;
  return newHeight;
}
