# Generated by Django 4.0.1 on 2022-04-26 04:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('base', '__first__'),
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Internship',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('location', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('requirements', models.CharField(blank=True, max_length=200, null=True)),
                ('duration', models.CharField(blank=True, max_length=200, null=True)),
                ('skills', models.CharField(blank=True, max_length=200, null=True)),
                ('responsibilities', models.CharField(blank=True, max_length=200, null=True)),
                ('salary', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('video', models.CharField(blank=True, max_length=200, null=True)),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.company')),
            ],
        ),
        migrations.CreateModel(
            name='InternshipLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('internship', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='internship.internship')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student.student')),
            ],
        ),
    ]
