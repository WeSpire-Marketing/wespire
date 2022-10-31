import ImgItem from './ImgItem'
import ListItem from './ListItem'
import MenuLink from './MenuLink'
import TextItem from './TextItem'
import ImgItemHoriz from './ImgItemHoriz'
import CardItem from './CardItem'
import TwoColItem from './TwoColItem'
import NamedChildrens from './NamedChildrens'
import CardItemWithTags from './CardItemWithTags'

const items = {
  textItem: TextItem,
  menuLink: MenuLink,
  menuList: ListItem,
  imgItemHoriz: ImgItemHoriz,
  imgItem: ImgItem,
  cardItem: CardItem,
  bigImgItem: TwoColItem,
  namedChildrens: NamedChildrens,
  cardItemWithTags: CardItemWithTags,
}

export default function RenderColItemByType({ type, ...props }) {
  const Item = items[type]
  return <Item {...props} />
}
