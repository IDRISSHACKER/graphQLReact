import "./btn.scss"

export default function Button(content: any){
    return (
        <>
            <a href="/" className="btn btn-default" onClick={content.onclick}>{content.content}</a>
        </>
    )
}