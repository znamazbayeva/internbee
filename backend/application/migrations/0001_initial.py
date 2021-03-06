# Generated by Django 4.0.1 on 2022-04-26 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('applied_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('status', models.CharField(choices=[('A', 'Applied'), ('R', 'Received'), ('I', 'Interviewing'), ('R', 'Rejected'), ('C', 'Completed')], max_length=100)),
            ],
        ),
    ]
