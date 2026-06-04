from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer

@api_view(['POST'])
def contact_create(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "contact form submitted successfully"
        })
    return Response(serializer.errors)

