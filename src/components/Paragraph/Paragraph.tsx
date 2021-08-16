import React from 'react';
import classNames from 'classnames';

interface ParagraphProps {
  className?: string;
  primary?: boolean;
  tag?: React.ElementType;
  style?: React.CSSProperties;
}

export const Paragraph: React.FC<ParagraphProps> = ({ className, primary, tag: Tag = 'p', style, children }) => {
  const textClasses = classNames({ 'text-primary': primary }, className);
  return (
    <Tag className={textClasses} style={style}>
      {children}
    </Tag>
  );
};
