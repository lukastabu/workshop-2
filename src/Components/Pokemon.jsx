function Pokemon ({urlas, name}) {
    return (
        <div>
            <h2>{name}</h2>
            <a href={urlas} alt={name + 'pokemonas'}>{urlas}</a>
        </div>
    )
}

export default Pokemon;