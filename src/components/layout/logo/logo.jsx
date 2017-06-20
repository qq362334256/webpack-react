import React from 'react';

// logo的样式
const defaultLogoStyle = {
    height: '76px',
    color: '#fff',
    fontSize: '28px',
    lineHeight: '76px',
    background: '#1f262d'
};


// 导航logo组件
const Logo = ({ data: { logoUrl, logoHref = 'javascript:void(0);' }, style }) => {
    const aClassName = `${ logoUrl ? 'text-no-index rel ' : '' }db wh-100`;
    let logoStyle = Object.assign({}, defaultLogoStyle, style);


    // 如果传入的logo图片，就当做背景图片
    if (logoUrl) {
        logoStyle.background = `${ logoStyle.background } url(${ logoUrl }) no-repeat center`
        logoStyle.backgroundSize = '100% 100%';
    };

    return (
        <h1 className="text-center" style={ logoStyle }>
            <a href={ logoHref } className={ aClassName } style={{ color: logoStyle.color }}>
                logo
            </a>
        </h1>
    );
};


// 导出 logo 组件
export default Logo;