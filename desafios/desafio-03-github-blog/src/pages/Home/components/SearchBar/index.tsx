import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from "zod";
import { SearchBarContainer } from "./styles";

const schema = zod.object({
  query: zod.string()
});

type SearchFormInput = zod.infer<typeof schema>

interface SearchBarProps {
  getPosts: (data?: string) => Promise<void>;
  amount: number;
}

export function SearchBar({amount = 0, getPosts}: SearchBarProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(schema),
  });

  async function handleSearchPost(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchPost)}>
      <strong>Publicações</strong>
      <span>{amount} publicações</span>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchBarContainer>
  )
}
