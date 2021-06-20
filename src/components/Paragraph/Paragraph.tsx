import React from 'react';
import classNames from 'classnames';

interface ParagraphProps {
  className?: string;
  primary?: boolean;
  tag?: React.ElementType;
}

export const Paragraph: React.FC<ParagraphProps> = ({ className, primary, tag: Tag = 'p', children }) => {
  const textClasses = classNames({ 'text-primary': primary }, className);
  return <Tag className={textClasses}>{children}</Tag>;
};
