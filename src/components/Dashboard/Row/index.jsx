
const Row = ({ data }) => {
    const url = 'https://messari.io/asset-images/' + data.id + '/128.png?v=2'
    const defaultUrl = 'http://masesa.mx/wp-content/uploads/2016/06/no-image-available.png'
    const imageId = data.name + 'Image';

    const defaultCryptoLogo = error => {
        const renderedImage = document.getElementById(data.name + 'Image');
        renderedImage.src = defaultUrl;
    }

    return (
        <>
            <tr >
                <td><img id={imageId} onError={error => defaultCryptoLogo(error)} src={url} width='50px' alt={data.name} /></td>
                <td>{data.name}</td>
                <td>{data.price}</td>
            </tr>
        </>
    )
}


export default Row
