import django
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import Product, SmallLinkAnnouncement , Slider
from django.http import JsonResponse
import json


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@csrf_exempt
def get_all_products(request):
    if request.method == "DELETE":
        id = request.body


        obj = Product.objects.get(id=id)
        obj.delete()

        return JsonResponse({"status": 200})


    if request.method == "POST":
        title = request.POST.get('title')
        price = request.POST.get('price')
        description = request.POST.get('description')
        pic_src = request.FILES.get('PicSrc')
    

        print()
        print()
        print(title)
        print(pic_src)
        print()
        print()

        product = Product.objects.create(title=title, Price=price, description=description, PicSrc=pic_src )
        product.save()


        return JsonResponse({"value": 200})




    products = Product.objects.all()
    serilizedData = [
        {
            "title": product.title,
            "price": product.Price,
            "description": product.description,
            "PicSrc":  request.build_absolute_uri(product.PicSrc.url),
            "date": product.publishDate,
            "id": product.id,

        } for product in products]

    return JsonResponse(serilizedData, safe=False)


def getSMLAnnounce(request):
    actual = SmallLinkAnnouncement.objects.all()[0]
    serData = {
        "AnnounceImage": request.build_absolute_uri(actual.AnnounceImage.url),
        "title": actual.title,

    }

    return JsonResponse(serData)



@csrf_exempt
def SliderData(request):
    actual = Slider.objects.all()[0]    
    serData = {
        "SliderPicSrcs" : [
        request.build_absolute_uri(actual.picSrc1.url),
        request.build_absolute_uri(actual.picSrc2.url),
        request.build_absolute_uri(actual.picSrc3.url),
        request.build_absolute_uri(actual.picSrc4.url),
        request.build_absolute_uri(actual.picSrc5.url),
        request.build_absolute_uri(actual.picSrc6.url)
        ],


        "currentIndex": 0,
    "activeClassName_img": "",
    "deactiveClassName_img": " disNone",
    "activeClassName_index": "indexViewActive",
    "deactiveClassName_index": "indexViewDeactive",
    "imgClassNames": [
      " disNone",
      " disNone",
      " disNone",
      "disNone",
      " disNone",
      " disNone"
    ],
    "indexPointsClasses": [
      "indexViewDeactive",
      "indexViewDeactive",
      "indexViewDeactive",
      "indexViewDeactive",
      "indexViewDeactive",
      "indexViewDeactive"
    ],
    "titles": [
    actual.title1,
    actual.title2,
    actual.title3,
    actual.title4,
    actual.title5,
    actual.title6
    ],
    "descriptions": [
      actual.description1,
      actual.description2,
      actual.description3,
      actual.description4,
      actual.description5,
      actual.description6

    ]
    
    }


    return JsonResponse(serData)