import React from 'react';

export interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function getRandomColor() {
  const colors = [
    '#e57373', '#f06292', '#ba68c8', '#64b5f6', '#4db6ac', '#81c784', '#ffd54f', '#ffb74d', '#a1887f', '#90a4ae'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}


export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const [bgColor, setBgColor] = React.useState<string>(color || getRandomColor());

  React.useEffect(() => {
    if (color) {
      setBgColor(color);
    }
  }, [color]);

  const handleClick = () => {
    if (!color) {
      setBgColor(getRandomColor());
    }
    if (onClick) onClick();
  };

  return (
    <button
      style={{ backgroundColor: bgColor, color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
