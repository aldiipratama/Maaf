document.querySelector(".btn").addEventListener('click', function(){
	Swal.fire({
		text: 'Ini Aldi buatin khusus kamu yang pundung :P',
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true
	}).then(function(){
		const{
			value: name
		} =
		Swal.fire({
			title: 'Kenape sehh oi:v',
			input: 'text',
			confirmButtonText: 'Kirim',
			inputValidator: (value) => {
				if (!value) {
					return 'Isi dulu atuh'
				} else {
					jawaban = value;
				}
			},
			showClass: {
				popup: 'animate__animated animate__lightSpeedInRight animate__fast'
			},
			hideClass: {
				popup: 'animate__animated animate__lightSpeedOutRight animate__fast'
			}
		}).then(function(){
			Swal.fire({
				imageUrl: 'funny.gif',
				imageHeight: 150,
				text: 'Masa gara2 ' + `${jawaban}`,
				timer: 1500,
				timerProgressBar: true,
				showConfirmButton: false
			}).then(function(){
				Swal.fire({
					title: 'Yauda iya maafin',
					imageUrl: 'canda.gif'
				}).then(function(){
					Swal.fire({
						title: 'Mau seblak gak put?',
						icon: 'question',
						confirmButtonText: 'Mau',
						denyButtonText: 'Gak',
						showDenyButton: true
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire({
								title: 'Tapi Boonggggg:P',
								imageUrl: 'funny.gif',
								timerProgressBar: true,
								timer: 1500,
								showConfirmButton: false
							})
						} else if (result.isDenied) {
							Swal.fire({
								title: 'Yauda kalo gak mau:P',
								confirmButtonText: 'Iya, Makasih'
							})
						}
					})
				})
			})
		});
	});
});