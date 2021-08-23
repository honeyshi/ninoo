import React from 'react';

interface ImageProps {
  alt?: string;
  className?: string;
  src: string;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  return <img alt={props.alt == null ? '' : props.alt} src={props.src} className={props.className} />;
};
