export type ButtonDarkModeProps = {
  id: string
}

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
  children?: string;
}

export type TitlesProps = {
  children?: string;
}

export type PortfolioItems = {
  project_name: string
  project_description: string
  project_url: string
  project_git: string
  project_image: string
}

export type PortfolioItemsProps = {
  projects?: PortfolioItems[]
}

export type IntersectionObserverEntry = {
  isIntersecting: boolean;
};
