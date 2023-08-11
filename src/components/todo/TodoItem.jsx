export default function TodoItem(props) {
    // destrukturizuoti kad jsx galetumem sakyti tiesiog isDone, title
    const { id, isDone, title } = props.item;
    return (
        <li>
            <span
                // onClick={() => { props.onToggle(id) }}
                onClick={() => { props.onToggle(id) }}
                className={isDone ? 'finished pointer' : 'pointer'}
                role='button'
            >
                {title}
            </span>{' '}
            <button onClick={props.onDelete}>Delete</button>
            {/* <button onClick={props.onTest}>Delete</button> */}
        </li>
    );
}