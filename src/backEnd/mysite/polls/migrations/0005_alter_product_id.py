# Generated by Django 4.2.4 on 2023-08-02 14:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("polls", "0004_product_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="id",
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
