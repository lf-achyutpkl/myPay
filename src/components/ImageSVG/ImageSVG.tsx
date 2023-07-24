import React, { FunctionComponent } from 'react';
import assets from '../../assets';

type ImageSVGProps = {
  image: string;
  width?: number;
  height?: number;
  fill?: string;
};

/**
 * This is generic component for SVG images. Images are stored in assets folder.
 * @param props ImageSVGProps
 * @returns 
 */
const ImageSVG: FunctionComponent<ImageSVGProps> = (props) => {
  const { image, width, height, ...rest } = props;

  const Icon = assets[image];

  if (!Icon) {
    return <></>;
  }

  return <Icon width={width || 25} height={height || 25} {...rest} />;
};

export default ImageSVG;
