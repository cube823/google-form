import { updateCurrentSlice } from '../../../feature/currentSlice'
import { updateHederDescription, updateHederTitle } from '../../../feature/headerSlice'
import { Layout } from '../../../layout'
import { useAppDispatch, useAppSelector } from '../../../store'
import Input from '../../Widget/Input'
import * as S from './style'

const FormHeader = () => {
  const dispatch = useAppDispatch()
  const { title, description } = useAppSelector((state) => state.headerReducer)
  const { currentIndex } = useAppSelector((state) => state.currentReducer)

  const setCurrent = () => dispatch(updateCurrentSlice(-1))

  return (
    <Layout.Question style={{ padding: '24px', paddingTop: '22px' }} onClick={setCurrent}>
      <S.HederHighlight />
      {currentIndex === -1 && <S.CurrentHighlight />}

      <Input
        value={title.text}
        setValue={(val: string) => dispatch(updateHederTitle(val))}
        style={{
          padding: '13px 0 13px 0',
          fontSize: 32,
        }}
        hasBorderBottom={currentIndex === -1}
        hoverDisabled={currentIndex !== -1}
      />
      <Input
        value={description.text}
        setValue={(val: string) => dispatch(updateHederDescription(val))}
        placeholder='설문지 설명'
        style={{
          paddingTop: '7px',
          fontSize: '11pt',
        }}
        hasBorderBottom={currentIndex === -1}
        hoverDisabled={currentIndex !== -1}
      />
    </Layout.Question>
  )
}

export default FormHeader
