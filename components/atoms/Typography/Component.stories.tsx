import React from 'react'
import styles from '@components/atoms/Grid/styles.module.css'

export default {
  title: 'Atoms/Typography',
}

const cellStyle = {
  display: 'flex',
  gridColumn: "2 / -2",
  backgroundColor: 'var(--color-off-white)',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: 'var(--spacing-s)',
  padding: 'var(--spacing-m)'
} as React.CSSProperties

const cellLabel = {
  marginBottom: 'var(--spacing-s)',
  color: 'var(--color-brand-blue)'
}

const Template = () => (
  <div className={styles.grid}>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Noto Sans</h4>
      <p>the crazy fox jumps over the lazy dog</p>
      <p>1234567890 !@#$%ˆ&*()-+=</p>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Heading 1</h4>
      <h1>the crazy fox jumps over the lazy dog</h1>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Heading 2</h4>
      <h2>the crazy fox jumps over the lazy dog</h2>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Heading 3</h4>
      <h3>the crazy fox jumps over the lazy dog</h3>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Heading 4</h4>
      <h4>the crazy fox jumps over the lazy dog</h4>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Button label</h4>
      <span className="button-label">the crazy fox jumps over the lazy dog</span>
    </div>
    <div style={cellStyle}>
      <h4 style={cellLabel}>Paragraph</h4>
      <p>the crazy fox jumps over the lazy dog</p>
    </div>
  </div>
)

export const Default = Template.bind({})
