import * as C from './styles';
import { Photo } from '../../types/photo'

type Props = {
  item: Photo
}

export const PhotoItem = ({ item }: Props) =>{
  return(
    <C.Container>
      <img src={item.url} alt={item.name} />
      {item.name}
    </C.Container>
  )
}
