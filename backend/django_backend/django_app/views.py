from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from . import models
from . import serializers
from django.http import QueryDict


@api_view(["GET"])
def GetNotes(request):
    notes = models.Note.objects.all()
    serializer = serializers.NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def GetNote(request, note_id):
    try:
        note = models.Note.objects.get(id=note_id)
    except ObjectDoesNotExist:
        error_message = "Note not found"
        return JsonResponse({'error': error_message}, status=404)
    else:
        serializer = serializers.NoteSerializer(note)
        return Response(serializer.data)


@api_view(["POST"])
def CreateNote(request):
    data = request.data
    print(data)
    created_note = models.Note.objects.create(body=data["body"])
    serializer = serializers.NoteSerializer(created_note, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
def UpdateNote(request, note_id):
    try:
        note = models.Note.objects.get(id=note_id)
        print("Note, i want to edit", note)
    except ObjectDoesNotExist:
        error_message = "Note not found"
        return JsonResponse({'error': error_message}, status=404)
    else:
        new_data = request.data
        # Here in serializer, first argument is a model instance, and second argument is a dictionary <{body:"updated body value"}> we are getting from frontend
        serializer = serializers.NoteSerializer(instance=note, data=new_data)
        print("Serializer :", serializer)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


@api_view(["DELETE"])
def DeleteNote(request, note_id):
    note = models.Note.objects.get(id=note_id)
    print(note)
    note.delete()
    return Response("Note was deleted")