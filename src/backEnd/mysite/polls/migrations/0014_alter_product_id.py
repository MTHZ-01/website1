# Generated by Django 4.2.4 on 2023-08-04 11:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("polls", "0013_rename_productimage_product_picsrc_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
    ]
