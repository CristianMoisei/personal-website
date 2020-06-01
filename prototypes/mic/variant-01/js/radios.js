        function radioClick(element, checkedImageId) {

            document.getElementById('one').classList.remove('checked');
            document.getElementById('check-one').setAttribute('src', 'img/radio-unchecked.svg');
        
            document.getElementById('two').classList.remove('checked');
            document.getElementById('check-two').setAttribute('src', 'img/radio-unchecked.svg');

            document.getElementById('three').classList.remove('checked');
            document.getElementById('check-three').setAttribute('src', 'img/radio-unchecked.svg');

            document.getElementById('four').classList.remove('checked');
            document.getElementById('check-four').setAttribute('src', 'img/radio-unchecked.svg');

            document.getElementById('five').classList.remove('checked');
            document.getElementById('check-five').setAttribute('src', 'img/radio-unchecked.svg');
        
            
            element.classList.add('checked');
            document.getElementById(checkedImageId).setAttribute('src', 'img/radio-checked.svg');
        
        }