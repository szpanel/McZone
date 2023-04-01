import {Button as EButton} from '@rneui/themed';

interface McButtonProps {
  title: string;
}

export const Button = ({title}: McButtonProps) => {
  return <EButton title={title} />;
};
