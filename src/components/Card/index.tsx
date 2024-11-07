import './styles.css';

type Props = {
    title: string;
}

export default function Card({ title }: Props) {

    return (
        <div>
            {title}
        </div>
    );
}