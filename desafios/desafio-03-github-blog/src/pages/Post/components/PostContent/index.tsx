import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight'

interface PostContentProps {
  text: string;
}

export function PostContent({text}: PostContentProps) {

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
    >
      {text}
    </ReactMarkdown>
  )
}
