import Button from "../Button/Button";

import css from "./NumberSelector.module.css";

export interface INumberSelectorProps {
  label: string;
  onChange?: (value: number) => void;
  maxValue?: number;
  minValue?: number;
  value: number;
}

export default function NumberSelector(props: INumberSelectorProps) {
  const { label, maxValue, minValue, onChange, value } = props;

  function handleDecrement() {
    onChange?.(value - 1);
  }

  function handleIncrement() {
    onChange?.(value + 1);
  }

  return (
    <div className={css.root}>
      <div className={css.label}>{label}</div>
      <div className={css.row}>
        <Button disabled={value <= minValue} onClick={handleDecrement} small>
          -
        </Button>
        <span className={css.value}>{value}</span>
        <Button disabled={value >= maxValue} onClick={handleIncrement} small>
          +
        </Button>
      </div>
    </div>
  );
}
