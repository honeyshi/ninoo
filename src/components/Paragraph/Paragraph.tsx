import React from 'react';
import classNames from 'classnames';

interface ParagraphProps {
  className?: string;
  primary?: boolean;
  muted?: boolean;
  center?: boolean;
  tag?: React.ElementType;
  style?: React.CSSProperties;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  primary,
  muted,
  center,
  tag: Tag = 'p',
  style,
  children,
}) => {
  const textClasses = classNames({ 'text-primary': primary, 'text-muted': muted, 'text-center': center }, className);
  return (
    <Tag className={textClasses} style={style}>
      {children}
    </Tag>
  );
};
