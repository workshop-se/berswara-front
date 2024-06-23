export const NewsError = ({ error }: { error: string }) => { 
  return (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  )
}
