import s from './NavigationButton.module.css';

export default function NavigationButton({ title }) {
    return (
        <button className={s.navigationButton}>{title}</button>
    )
}
