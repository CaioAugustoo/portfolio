import React from "react"

export type HeaderProps = {
  item: string
}

export type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

export type ButtonProps = {
  children?: React.ReactNode;
}

export type TitlesProps = {
  children?: string;
  scrollPercentage?: number
}

export type IntersectionObserverEntry = {
  isIntersecting: boolean;
};
