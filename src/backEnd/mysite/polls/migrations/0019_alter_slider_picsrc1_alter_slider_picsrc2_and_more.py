# Generated by Django 4.2.4 on 2023-08-04 15:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("polls", "0018_rename_picsrc_slider_picsrc1_slider_picsrc2_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="slider",
            name="picSrc1",
            field=models.ImageField(upload_to=""),
        ),
        migrations.AlterField(
            model_name="slider",
            name="picSrc2",
            field=models.ImageField(upload_to=""),
        ),
        migrations.AlterField(
            model_name="slider",
            name="picSrc3",
            field=models.ImageField(upload_to=""),
        ),
        migrations.AlterField(
            model_name="slider",
            name="picSrc4",
            field=models.ImageField(upload_to=""),
        ),
        migrations.AlterField(
            model_name="slider",
            name="picSrc5",
            field=models.ImageField(upload_to=""),
        ),
        migrations.AlterField(
            model_name="slider",
            name="picSrc6",
            field=models.ImageField(upload_to=""),
        ),
    ]
