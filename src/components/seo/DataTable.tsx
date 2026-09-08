export interface DataTableModel {
  /** Descrição da tabela. Vai para <caption> em sr-only, para leitor de tela. */
  caption: string;
  columns: string[];
  rows: string[][];
}

interface DataTableProps {
  table: DataTableModel;
  /** true quando a tabela está sobre uma seção de fundo escuro (--s-dark). */
  dark?: boolean;
}

/** Tabela comparativa usada nas páginas de conteúdo. */
const DataTable = ({ table, dark = false }: DataTableProps) => (
  <div
    className="overflow-x-auto rounded-sm"
    style={{ border: `1px solid ${dark ? 'rgba(244,237,230,0.1)' : 'var(--bd)'}` }}
  >
    <table
      className="w-full border-collapse text-sm"
      style={{ fontFamily: 'Instrument Sans, sans-serif', minWidth: '640px' }}
    >
      <caption className="sr-only">{table.caption}</caption>
      <thead>
        <tr style={{ background: dark ? 'rgba(192,132,89,0.14)' : 'var(--amber-pale)' }}>
          {table.columns.map((col) => (
            <th
              key={col}
              scope="col"
              className="px-4 py-3 text-left text-xs uppercase"
              style={{
                color: dark ? 'var(--amber-l)' : 'var(--amber-d)',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row[0]} style={{ borderTop: `1px solid ${dark ? 'rgba(244,237,230,0.08)' : 'var(--bd)'}` }}>
            {row.map((cell, i) =>
              i === 0 ? (
                <th
                  key={i}
                  scope="row"
                  className="px-4 py-3.5 text-left align-top leading-relaxed"
                  style={{ color: dark ? 'var(--areia)' : 'var(--t-h)', fontWeight: 600 }}
                >
                  {cell}
                </th>
              ) : (
                <td
                  key={i}
                  className="px-4 py-3.5 align-top leading-relaxed"
                  style={{ color: dark ? 'var(--fumo)' : 'var(--t-b)' }}
                >
                  {cell}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
