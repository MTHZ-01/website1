# Generated by Django 4.2.4 on 2023-08-02 12:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("polls", "0003_alter_product_publishdate"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="Price",
            field=models.CharField(default="1500", max_length=100),
            preserve_default=False,
        ),
    ]
