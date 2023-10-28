interface PDFRendererProps {
    url: string
}

const PDFRenderer = ({ url }: PDFRendererProps) => {
    return <div>${url}</div>
}

export default PDFRenderer;