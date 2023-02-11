type PaginationProps = {
  handlePageBefore: () => void
  handlePageNext: () => void
  page: number
}

export function Pagination({
  handlePageBefore,
  handlePageNext,
  page
}: PaginationProps) {
  return (
    <div>
      <button onClick={handlePageBefore}>anterior</button>
      <span style={{ color: 'white' }}>{page}</span>
      <button onClick={handlePageNext}>proximo</button>
    </div>
  )
}
