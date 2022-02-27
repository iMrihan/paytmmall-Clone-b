function navBar(){
    return `
    <div id="logo1">
    <a href="./index.html">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoVpfRCNKX-dn80OWUQONPgP5RKwHWCAsEQn1ACTJ9UZT1eyFJ3rE0cwjGSeR6Cdjv8M&usqp=CAU" 
                alt=""
                />
                </a>
            </div>
    <div id="options">
    <div id="shopByCategory">
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAdklEQVRIie3SwQkCMRBG4Tc5ZNtZ04VrByHF2IsEKzAWIaxpZ3MZL54NSGAR52tghp8HZm8CoJxdC48I4NdbFtChB7ZwSqJ6AVDVNNV7BmiH5etD/lkEwI348pP3REibjxFEfS3XkRP9Pquoyyrqsoq6rKI/8AKOy1QQPKE/NgAAAABJRU5ErkJggg=="
            alt=""
        />
        <p>Shop By Category</p>
    </div>
    <div id="search">
        <input type="text" placeholder="Search for a Product, Brand or Category"/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVRIie3Wz0scZxzH8fd31pmhMQcv9ZBIKW0KBZNWd0POSUxSrIFsAvsPNIfSUrQUJDl6CjESci7Wv0CMPxA0CRZ7i1A1GIVcRBpCU+y1ks7PTw7OllhWd1Y0Jz+nZ3ef53k9zzyz3xk4ynuK1eug9ooX+ltlE2WMIqItG/kKsShj0guaJ2xtNDwwOCj23LBUQxif1JlnXeb0+0vT43lhp9aXYsAJil/fM2ksQ1eAPqF2N4mPu0l8XGlyGvEj8Bz41JQ+DDq774qBmnP+PzV3vI3SDwQYfe7SuWFjIN1tkVHnwrdgDwBfaNBfnrndMBwUe26YNAYEhr5yl2d+y7ODqOPqeVk6C/iSrvvPZib26r/jsqi94lmqoWxJfXlRAPfZ9DyynwDMnCGVSm5uOPS3ytUzdZfODedF/8M/O/YzxiroVJi2XssNm3Q9a/2y25nuFRsdTUAjAGZOOTcMVgQQ6VyjaDVK0idZ62wj8AkAL3zzcr+w96+/PVZ2sgH4ANIS1a2GNWD9CRB6H3y0Xzd841TH/tUAzO8AJru8X9gp6AoA0tPcsIxJAIybeUvfjvGVSkHYNwDCpnLDXtA8AawDZ7bLYGOJ1v/5DtQObHgtW3s+MHb+j9dGQ5nTn316EHVcPZ8b/bLnArL7AI7Ra/PzcW4YwF+aHhcaBHxZOht29HyvSqWw2wSqVAphsfsHOZoFPGCzIC3UW2jNW18MOGHnwh3DbmW9VkEjStInXhz8ARAWmj+2Jl1GdjO7vACbQCvGqhvHXbbyeLMhuJqgo7ts5gyBTtXZwIZj9BakhcjsV8Tpenj9V59SyQ3T1mtmThmpBNYGMrDXSE+FTXktW+PVM9UXV1qjpqa5eniuKtNo1Nn9YYTNAWeAF66TXLTFR68PHc6DH3ytzmLLM3+7SXxp+8bk8ygtTL77+6HBALbyeNON4y5gEUgO0zrKrnkLApsooeRLe24AAAAASUVORK5CYII=" 
        alt="">
    </div>
    <a href = "./order.html">
    <div class="ab">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADhklEQVR4nO2byWsUQRTGv1c9PWYQ9SBE1IMKkotjGBSNmIAa45K460kvihDyD/hviBcvUUQRES8KMZmMGlcURD1k1OQSxOWgKILgGtM9Xc+DM1kuWtWpnpqQ+p26mn7f++pNVy9T1YDD4XDMYihuIGf3LgrS0TYBuQQsYutMC5IsJd6nS/5tGrr+KZaEbgCvbVsQyvRJAMcAeHGSJkAJROd9X56gJ4VvOoFaBeD1BxaGYfAA4FV6/qoEYcgfizbR8M0vqiEpHf0gDC7SlM7zYxA9ZebfOjqmIKI6MJoAbPhrB9lS2rsAYK+yhuqB4dqdLSzFw3KTAepMD+bP6RhOiiDX3gmibpT7QxAb/cG+xyqxQjUJR+LgpOalWuk8AKSLhbMgulxpM/iQaqx6AQQaJhJQv7q96sCSxz0RuOFfx05GuQDEPHc8iOmjurXqICA+VLYZPE89bpbjCmDbgG20ngP+R7imvRUs1pnUnILEU/95/p5JSWMFGG3cs4I5ugVwco/HAqXRxj0NmRe9b8xJzjREyCbljJ0BmRe9b8Lc7jaJqA1kdmgBABglAe92ptj/1qSsUaN+se8+gPsmNZNm5g0Bw7gC2DZgG2PXAF7ZPiecTwUwNmMaf7X9KwWAe/537qBXhTFTosbOgHAerQZjC5LpPMq6reF8kTUpaqwA/nd+CeAu/v5SScAA3fG/ySGTosaGQPm03GpKr1rM+ougK4BtA7ax9zrMLCNGT93z/hGTHnSx9zpMgCB0AVhpykMc3BAwJaT7OiyAnxF7V0zlj4t7HbZtwDauALYN2MYVwLYB27gC2DZgG1cA2wZsM+sLYH4KyyCjuZ3LPSF2RVLmM8UbRqfEKtT0GeCRNwDGaY+8gaRy1HQBJmCZlHJNDwGZwg4RYZ/0qCepHDVdgLpn+dcATiWZY4YMgeRQXyjJ9KOyLUkuTsZOfCSipZVtApRXjKsvlCSMTGzTLnVr1WGyJznJ6//QWSl6bbzBfCTItXcqu0uYYE1HF4DDlTYBV1VjtWZyx3IdvUTYPb6D8QREjwj4rKNjCgbXA2gBsL6yj4Aef7B/v6qG1l0gHUZHwzneAzCy5WxNADclNR0cg5epIDquE6B1F6Dhm198n5vBfAZASctaspQAdPu/Us06X4sA0/loqnF7fSBSbQJYJokXxNWZDoLpqwTepYkHaLBgZRg6HA7HjOYP0oEQ7mVTJb0AAAAASUVORK5CYII=" 
        alt="">
        <p>My Orders</p>
    </div>
    </a>
    <a href = "./cart.html">
    <div class="ab">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADI0lEQVRYheWVy28TVxTGf+d6xi4hQd2gJoRGEWLBo2oyGVKJroEQEyReXsG2YdlFxQL+gHbDlg37LgqVeLSNKxFggSDlERuoCumigAiEZgdUtcmMPacLjyM/xomDnU35pNHM3HPu930658wd+NAhK92gm0cTfpcZR/Uowmfh8u+Ifm8vdJ6VP857q2YgNzDWa5ngF2CgAVvWV2tsbfbyXLOcptlE3TyaqBB/pMoBO2ets3PWOlU9CMygODb+T7o9FW+W12o20e+S46H4Y9t4X8r05JuK8EV1d133g/hvIEN+4t+vgDPN8DZdAeAogCona8QBkOnJNyrmFADKsWZJV2BAtgHE89a1Rhlxu3g1NLB9FQxoJ4D8efmfRhlyO/229EDXKhj40OE5yZve4L4b7corI/IgUhDfST4B+lfgcSk8s7MTmwS0NhA5A/7A2HAbxQH6/cG9O6ICkQeRxoopUUFFTycy6ROtKHvOvtOg36gxKeBubTyyAhLIodJdz7UiDkAg5wBESWlEy+sMeANjXyBsAp7a93+916p+/MHPd4C/aNCGOgMaK6YAFH6IGpr3gaI/AoRtaGxAQUTlMIAgneqO9LQs7o70CGYtgChHattQ9aKDBz72xZsCtoRLRZAZCO6BmRZ4HASFV3ErPk8xVpD7F1+X9xErWl7B+8QYq0dhKwQumB2gW4BYyDdja3xneV+dAYAFJ/mtwEngGbABaPrf3gAeMAf0K3yXyE6cqgxGfIY6BEKAfJ34qONKIZ9zFB0G3SYiPQrdAhsUeit3CbxUmBP4W1VfgTwS5K61piO78C6326CXStzVqDMgyBBAUAwyMnU+D9wKryr4TnJWYWP4OmtnJ/oalSD3+WjGxGSRuxJVQ5h39/cB64H5jofpF40IS0Z1XOAFMCvC+FK5Idc8sD7UWERVBYyqC6DI9FKEAFY2nQY+XS6vDIWMwKgpFoaA54ua1VlBuUTLGngPlDjFVLWh9iByQyOZtsuLKXO6lcu1Q+gAiMgFz0m214AG5YfoCuTd/X0C3e1VrYdAd254z/Kz4zlJ9Zxky/+CdvH8f/EfNL4ZezEYaJYAAAAASUVORK5CYII=" 
        alt="">
        <p>No Items in the Bag</p>
    </div>
    </a>
    <a href="./login.html">
    <div class="ab" id="logIn">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAADLUlEQVRIid2VT2hcVRTGf+fN+5M/VXcFpaJoK2iQZjIluNK4qDVJoWNhUNwoFpTiIlAaKqIyIGjaWLpwIaV0oTtNq0lpM/gH1GWjM5OqFbGNICnGFgSVJva9l3mfi76Jk5lJbZb6wYNz73fO9517D48L/3XYjUj1FPwoWMybyGP0ITalVZcQZRlTftg9aecnonUbhH3Duy3ROMY9/9LknMwZDSqnP2pHOi1dU3TCvqFDJp1Mxb8BRoR6vNryBq+ju0tO5n5kLwLngHtNyYdhdnBMFFv0Wk5wXZxRIMQY8Sr9x4xi0q47UXTi7MzzwBGgQ+hgUC29tKZB2De826STQGhoh1ctfbnWvTQi7t05IEumgU5JTwSzpck6t3Ik9RR8SzSe2o7crDiAN3v6C2AfgJkzrlzOazGIgsV8/c69Sv+xmxVfMalOHwW+BW2Oko276vtuPTCRT8PjcXbm84ihh9djEDfEZk4eOLHqBEAOQOgz4KH19d8MbatH/xiI2wH8JW8e+KlN1TVLtMPMHgeuteF/8G5b6gQg4Y5WgwaYeK9pqybjGe9c6ROvcuZjmZ4Faqtq4F0WbvWa6hoMjAWAqCu+081cfkvikGABmBc8GVSmP6inBpXS+0JPGVwSLAgddJ3Lh6Ogdleq+ks9d2XIwNfAfSbbbuXy98CB9GuLoFo6QTrIOuLs0GMCEDMtBjKmTDyNsUcU327+ezUw4PJb9y1/dcQbnNDpcl1ni9ADiMCrll5XoZCJLy49B0LoVIuBH3ZPxv7iHPBgnD37AlXeWREHi//o+hNXne6yCxlIBGA/ei6PAMRzV/eC9QAXfOfKVMsM7PxEJHNG09WRuHfnwAoHMtlrwO/AIjBr8Kq35G6zr6Z/jbcOP4rsMKAE22/lctxQuxphdnDMsANAiGyft6XrqE1M1JrzAFQoZOK5q3tTcV/wZlCdfrkxp8VAFJ0oe/aN1ASM70DHVUs+9ZfDnwGiTPfd5mo7sj2gHkCCMb/a/0rz7NZ+cHoH82bOOGjzWjkpLiTY/o7qmVPtyBs/mbmcFyUbd5k5eaQc2KaUmb/+ZGrKd65MNd75/w9/A7acQ4Oc6FFKAAAAAElFTkSuQmCC" 
        alt="">
        <p>Log In/Sign Up</p>
    </div>
    </a>
</div>`
}

export default navBar;