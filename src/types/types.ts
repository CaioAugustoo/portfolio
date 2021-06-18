import React from "react";

export type HeaderProps = {
  item: string;
};

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ScrollTopProps = {
  scrolled: boolean;
};

export type ButtonProps = {
  children: React.ReactNode;
};

export type TitlesProps = {
  children?: string;
  scrollPercentage?: number;
};

export type IntersectionObserverEntry = {
  isIntersecting: boolean;
};

export type ProjectsProps = {
  title: string;
  about: string;
  sourcelink: string;
  link: string;
  image: {
    url: string;
  };
};

export type HomeProps = {
  hellotext: string;
  introtext: {
    html: string;
  };
  introabout: {
    html: string;
  };
  about: {
    html: string;
  };
};

export type AboutPageDataProps = {
  data: {
    about: {
      html: string;
    };
  };
};

export type HomePageDataProps = {
  data: HomeProps;
};

export type PortfolioDataProps = {
  data: ProjectsProps[];
};

export type PortfolioItemProps = {
  projects: ProjectsProps[];
};

export type HomePageProps = {
  homepages: HomeProps[];
  projects: ProjectsProps[];
};
