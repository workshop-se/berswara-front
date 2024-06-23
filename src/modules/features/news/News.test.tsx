import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { NewsLoading } from './News.view'
import React from 'react'

describe('NewsPage', () => {
  it('should render the component', () => {
    render(<NewsLoading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
