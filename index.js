fetch('content/SecondadyHeader.json')
.then(response => response.json()) 
.then(data => {
  document.getElementById('hours').textContent = data.hours;
  document.getElementById('phone').textContent = data.phone;
  document.getElementById('navOptionOne').textContent = data.navOptionOne;
  document.getElementById('navOptionTwo').textContent = data.navOptionTwo;
  document.getElementById('navOptionThree').textContent = data.navOptionThree;
  document.getElementById('navOptionFour').textContent = data.navOptionFour;
  document.getElementById('navOptionFive').textContent = data.navOptionFive;
  document.getElementById('navOptionSix').textContent = data.navOptionSix;
  document.getElementById('navOptionSeven').textContent = data.navOptionSeven;
  document.getElementById('navOptionEight').textContent = data.navOptionEight;
  document.getElementById('navOptionNine').textContent = data.navOptionNine;
  document.getElementById('navOptionTen').textContent = data.navOptionTen;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

fetch('content/slider.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('businessname').textContent = data.businessname;
  document.getElementById('businessnameTwo').textContent = data.businessnameTwo;
  document.getElementById('sliderCall').textContent = data.sliderCall;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/threeimagesVerticalTextButton.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('titleThree').textContent = data.titleThree;
  document.getElementById('cardTitleLeft').textContent = data.cardTitleLeft;
  document.getElementById('cardTextLeft').textContent = data.cardTextLeft;
  document.getElementById('cadrTitleMiddle').textContent = data.cadrTitleMiddle;
  document.getElementById('cardTextMiddle').textContent = data.cardTextMiddle;
  document.getElementById('cardButtonMiddle').textContent = data.cardButtonMiddle;
  document.getElementById('cardTextRight').textContent = data.cardTextRight;
  document.getElementById('cardButtonRight').textContent = data.cardButtonRight;
  document.getElementById('cardTitleRight').textContent = data.cardTitleRight;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

fetch('content/imageBackgroundWithButtonsOver.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('titleThree').textContent = data.titleThree;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/popularBrands.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('popularBrandsHeader').textContent = data.popularBrandsHeader;
  document.getElementById('popularBrandsTitle').textContent = data.popularBrandsTitle;
  document.getElementById('popularBrandsText').textContent = data.popularBrandsText;
  document.getElementById('popularBrandsBtn').textContent = data.popularBrandsBtn;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/ourStorybanner.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('OurStoryBannerTitle').textContent = data.OurStoryBannerTitle;
  document.getElementById('OurStoryBannerTextOne').textContent = data.OurStoryBannerTextOne;
  document.getElementById('OurStoryBannerTextTwo').textContent = data.OurStoryBannerTextTwo;
  document.getElementById('OurStoryBannerButton').textContent = data.OurStoryBannerButton;


})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/reviewsNoPictures.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('reviewsNoPicturesTitle').textContent = data.reviewsNoPicturesTitle;
  document.getElementById('reviewsNoPicturesNameOne').textContent = data.reviewsNoPicturesNameOne;
  document.getElementById('reviewsNoPicturesReviewOne').textContent = data.reviewsNoPicturesReviewOne;
  document.getElementById('reviewsNoPicturesNameTwo').textContent = data.reviewsNoPicturesNameTwo;
  document.getElementById('reviewsNoPicturesReviewTwo').textContent = data.reviewsNoPicturesReviewTwo;
  document.getElementById('reviewsNoPicturesNameThree').textContent = data.reviewsNoPicturesNameThree;
  document.getElementById('reviewsNoPicturesReviewThree').textContent = data.reviewsNoPicturesReviewThree;
  document.getElementById('reviewsNoPicturesButton').textContent = data.reviewsNoPicturesButton;
})
.catch(error => {
  console.error('Error fetching data:', error);
});



fetch('content/footer.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('FirstColumnTitle').textContent = data.FirstColumnTitle;
  document.getElementById('street').textContent = data.street;
  document.getElementById('country').textContent = data.country;
  document.getElementById('city').textContent = data.city;
  document.getElementById('phone').textContent = data.phone;
  document.getElementById('SecondColumnTitle').textContent = data.SecondColumnTitle;
  document.getElementById('NavOne').textContent = data.NavOne;
  document.getElementById('NavTwo').textContent = data.NavTwo;
  document.getElementById('NavThree').textContent = data.NavThree;
  document.getElementById('NavFour').textContent = data.NavFour;
  document.getElementById('NavFive').textContent = data.NavFive;
  document.getElementById('NavSix').textContent = data.NavSix;
  document.getElementById('ThirdColumnTitle').textContent = data.ThirdColumnTitle;
  document.getElementById('ThirdColumnTextOne').textContent = data.ThirdColumnTextOne;
  document.getElementById('ThirdColumnTextTwo').textContent = data.ThirdColumnTextTwo;
  document.getElementById('ThirdColumnTextThree').textContent = data.ThirdColumnTextThree;
  document.getElementById('ThirdColumnTextFour').textContent = data.ThirdColumnTextFour;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/textWithSlider.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('serviceTitle').textContent = data.serviceTitle;
  document.getElementById('serviceText').textContent = data.serviceText;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/gridModelOne.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('TitleOne').textContent = data.TitleOne;
  document.getElementById('TitleTwo').textContent = data.TitleTwo;
  document.getElementById('TitleThree').textContent = data.TitleThree;
  document.getElementById('TitleFour').textContent = data.TitleFour;
  document.getElementById('TitleFive').textContent = data.TitleFive;
  document.getElementById('TitleSix').textContent = data.TitleSix;
})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/fourSquaresProps.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('FourSquaresPropsTitle').textContent = data.FourSquaresPropsTitle;
  document.getElementById('valueproptitleone').textContent = data.valueproptitleone;
  document.getElementById('valueproptitletwo').textContent = data.valueproptitletwo;
  document.getElementById('valueproptitlethree').textContent = data.valueproptitlethree;
  document.getElementById('valueproptitlefour').textContent = data.valueproptitlefour;
  document.getElementById('valueproptextone').textContent = data.valueproptextone;
  document.getElementById('valueproptexttwo').textContent = data.valueproptexttwo;
  document.getElementById('valueproptextthree').textContent = data.valueproptextthree;
  document.getElementById('valueproptextfour').textContent = data.valueproptextfour;
  document.getElementById('btnone').textContent = data.btnone;
  document.getElementById('btntwo').textContent = data.btntwo;
  document.getElementById('btnthree').textContent = data.btnthree;
  document.getElementById('btnfour').textContent = data.btnfour;
})
.catch(error => {
  console.error('Error fetching data:', error);
});




fetch('content/reviewWithPictures.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('reviewWithPictureTitle').textContent = data.reviewWithPictureTitle;
  document.getElementById('customerOne').textContent = data.customerOne;
  document.getElementById('testimonialOne').textContent = data.testimonialOne;
  document.getElementById('customerTwo').textContent = data.customerTwo;
  document.getElementById('testimonialTwo').textContent = data.testimonialTwo;
  document.getElementById('customerThree').textContent = data.customerThree;
  document.getElementById('testimonialThree').textContent = data.testimonialThree;

})
.catch(error => {
  console.error('Error fetching data:', error);
});


fetch('content/textWithImage.json')
.then(response => response.json())
.then(data => {
  console.log(data); 
  document.getElementById('textWithImageTitle').textContent = data.textWithImageTitle;
  document.getElementById('textWithImageTextOne').textContent = data.textWithImageTextOne;
  document.getElementById('textWithImageTextTwo').textContent = data.textWithImageTextTwo;
  document.getElementById('textWithImageTextThree').textContent = data.textWithImageTextThree;


})
.catch(error => {
  console.error('Error fetching data:', error);
});
