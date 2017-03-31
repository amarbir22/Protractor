package RestAssured;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.response.ResponseBody;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.URISyntaxException;


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
}
