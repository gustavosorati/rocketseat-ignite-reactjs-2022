import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight'
import { PostContentContaienr } from "./styles";

interface PostContentProps {
  text: string;
}

export function PostContent({text}: PostContentProps) {

  return (
    <PostContentContaienr>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
      >
        {text}
      </ReactMarkdown>
    </PostContentContaienr>
  )
}
