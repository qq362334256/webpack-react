import React from 'react';

// logo的样式
const logoStyle = {
    height: '76px',
    color: '#fff',
    fontSize: '28px',
    lineHeight: '76px',
    background: '#1f262d'
};

// logo图片的样式
const imgStyle = {
    top: 0,
    left: 0
};


// 导航logo组件
const Logo = ({ data: { logoUrl, logoAlt = 'logo', logoHref = 'javascript:void(0);' } }) => {
    const aClassName = `${logoUrl ? 'text-no-index rel ' : ''}db wh-100`;

    return (
        <h1 className="text-center" style={logoStyle}>
            <a href={logoHref} className={aClassName}>
                logo
                { logoUrl ? <img className="abs wh-100" style={imgStyle} src={logoUrl} alt={logoAlt} /> : null }
            </a>
        </h1>
    );
};

export default Logo;