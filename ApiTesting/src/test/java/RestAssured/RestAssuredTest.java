package RestAssured;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.response.ResponseBody;
import com.jayway.restassured.response.ValidatableResponse;
import org.junit.Test;

import java.net.URI;
import java.net.URISyntaxException;

import static com.jayway.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;


/**
 * Created by alubana on 3/31/2017.
 */
public class RestAssuredTest {

    @Test
    public void givenUrl_whenSuccessOnGetsResponseAndJsonHasRequiredKV_thenCorrect() throws URISyntaxException {
        URI uri = new URI("http://httpbin.org/get");
        Response res = RestAssured.when().get(uri);
        ResponseBody ff = res.body();
        System.out.println("body " + ff.prettyPrint());
    }

    @Test
    public void testMessagenr() throws URISyntaxException {
        URI uri = new URI("http://localhost:8080/messenger-app/webapi/messages/1");
        ValidatableResponse hhh = given()
                .accept(ContentType.JSON)
                .when().get(uri)
                .then()
                .body("author", equalTo("John"));

    }
}
