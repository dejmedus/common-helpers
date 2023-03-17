#!/usr/bin/env node

const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra felis venenatis purus auctor, eget feugiat ante tempor. Sed semper in est at pretium. Donec sed elementum felis, quis suscipit diam. Curabitur feugiat molestie rhoncus. Vestibulum maximus aliquam pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eu erat suscipit, mollis orci ut, cursus mauris. Duis eget congue velit. Maecenas at tellus a odio sagittis rutrum.',

    ' Nulla sagittis ullamcorper cursus. Ut dignissim eget sapien eget sodales. Praesent ipsum metus, tincidunt at metus at, interdum sodales augue. Vestibulum ut dolor hendrerit, feugiat est et, tincidunt augue. Praesent convallis viverra purus, rhoncus euismod sapien commodo vitae. Vivamus nec sem id nisi condimentum interdum tincidunt id mauris. Donec consequat justo et justo aliquet suscipit.',

    'Proin malesuada tempor justo at egestas. Morbi molestie facilisis dolor, quis iaculis elit dapibus ac. Nulla facilisi. Donec in sagittis ante, vitae dictum purus. In vitae tellus in odio laoreet accumsan nec in odio. Donec interdum facilisis scelerisque. Nam sit amet turpis quis felis eleifend sodales. Quisque velit nisl, auctor eu mattis vitae, bibendum sit amet lacus.',

    'Donec convallis quis quam non egestas. Pellentesque ac mattis enim. Nullam at mollis odio, at porttitor nulla. Mauris tincidunt pellentesque purus, vitae ultrices neque hendrerit vel. Aenean mi enim, dapibus vel vulputate non, dapibus vitae velit. Etiam ultrices enim risus, euismod eleifend urna tristique et. In quis diam sed diam commodo rutrum quis a justo. Vivamus cursus porta accumsan. Aenean sed sem dui. Cras in nunc neque. Vivamus nec sem et nibh lacinia vulputate a eget mi. Donec mauris lectus, scelerisque nec consequat sed, molestie sed tellus. Nunc pellentesque eleifend augue in volutpat. Integer facilisis, sem in semper cursus, arcu lectus vulputate mauris, eu rutrum felis purus vel metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque varius lorem id ex pretium, in lacinia eros cursus.',

    'Cras varius erat a lectus tincidunt, eget lobortis tortor facilisis. Proin vel pretium turpis. Aliquam quis eros dui. Morbi pellentesque neque in nunc sollicitudin rhoncus. Donec condimentum magna et risus placerat tempus. Nam bibendum efficitur tortor vel consequat. Nulla facilisi.',

    'Donec ac metus viverra, dapibus massa sed, lacinia augue. Proin tempor urna nec nunc congue, ullamcorper suscipit metus posuere. Maecenas sollicitudin vestibulum ligula sollicitudin eleifend. Nam dignissim neque ac nisl porttitor, id rutrum ante mollis. Sed id erat eget velit tristique consequat. Maecenas ullamcorper massa ac risus pellentesque imperdiet. Cras aliquet libero ac facilisis blandit. Donec faucibus, nisl et dapibus mattis, massa massa feugiat metus, vitae feugiat ante ante sit amet est. Integer in nulla a enim faucibus bibendum sit amet vitae risus. Suspendisse consectetur felis neque, nec aliquet dolor ornare in. Quisque vel laoreet arcu, sed pretium sapien. In tempor sit amet magna elementum euismod. Nulla erat risus, pulvinar in leo congue, consectetur euismod est.',

    'In hac habitasse platea dictumst. Sed semper lorem eu dolor dapibus tristique. Donec in velit lacus. Quisque imperdiet nisi ut ante consequat gravida. Phasellus nec ante erat. Integer lobortis justo eu nisl fringilla, a blandit ligula lobortis. In felis nibh, malesuada in augue sit amet, maximus posuere mauris.',

    'Mauris sit amet elit eget odio sagittis viverra quis ac lacus. Integer odio dolor, sollicitudin id magna sit amet, fringilla pharetra tortor. Suspendisse semper, sapien sit amet lobortis fermentum, velit arcu imperdiet nibh, vitae accumsan metus augue quis erat. Pellentesque dapibus rhoncus dui, ut pretium dolor iaculis a. Phasellus feugiat ut lectus sit amet convallis. Nulla facilisi. Vivamus gravida sem at lacus maximus pretium quis id turpis.',

    'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis egestas semper blandit. Proin euismod libero a libero porta porta. Aenean non egestas orci, ut porttitor velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam tristique in tellus et feugiat. Sed efficitur orci vehicula magna auctor, sed commodo arcu congue. Maecenas a sem fringilla, interdum turpis eget, euismod lacus. Nullam felis turpis, commodo ac cursus in, laoreet ut sem. Sed rutrum elit ac augue consequat, ut posuere lorem posuere. Nullam metus purus, malesuada placerat aliquam eu, scelerisque vel ipsum. Suspendisse mollis vel urna nec lobortis. Nam ullamcorper, velit ut aliquet ultricies, lorem dui eleifend urna, sollicitudin sollicitudin nisl enim quis justo. Duis egestas diam at commodo pharetra.',

    'Pellentesque maximus ex vel lectus convallis aliquet sit amet eu augue. Vivamus vitae tincidunt sem, sed fermentum magna. Duis volutpat lobortis elit, et vulputate neque luctus ut. Aliquam nec turpis et nisl sollicitudin varius at non enim. Nullam ac eros non ligula luctus ultrices quis id magna. Nam ac tempus magna, nec condimentum nunc. Sed in dictum libero. Curabitur gravida nibh at orci venenatis gravida.',
]


function lorem(num) {
    if (num) {
        let j = 0;
        for (let i = 0; i < num; i++) {
            console.log(paragraphs[j++] + '\n');

            if (i !== 0 && (i + 1) % 10 === 0) {
                j = 0;
            }
        }
    }
    else {
        console.log(paragraphs[0]);
    }
    process.exit(1);
}

module.exports.lorem = lorem;