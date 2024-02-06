export type QuestionType = 'short' | 'long' | 'multiple' | 'checkbox' | 'dropdown'

export interface InputInterface {
  type: 'Title' | 'Description' | 'Question' | 'Option'
  text: string
}
