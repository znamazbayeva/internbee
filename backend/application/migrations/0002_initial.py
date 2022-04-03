# Generated by Django 4.0.1 on 2022-04-03 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('base', '0001_initial'),
        ('application', '0001_initial'),
        ('internship', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='internship',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='internship.internship'),
        ),
        migrations.AddField(
            model_name='application',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.student'),
        ),
    ]
