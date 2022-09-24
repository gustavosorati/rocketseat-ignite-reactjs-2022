export function Post(props) {
    return (
        <>
            <h1>Post</h1>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
}

